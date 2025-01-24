import hotkeys from 'hotkeys-js';
export default class FabricTranslate {
  constructor(canvas, options = {}) {
    this.events = [];
    this.dragMode = false;
    this.canvas = canvas;
    this.selection = canvas.selection;
    this.hotkeys = options.hotkeys || ['Space'];
    this.checkObjectMovable = options.checkObjectMovable;
    this.initHotKey();
    this.initDring();
  }

  initHotKey() {
    const hotkeyEvent = (eventName, e) => {
      e.preventDefault();
      const matchKey = this.hotkeys.find((item) => item === e.code);
      if (matchKey && e.type === 'keydown') {
        if (!this.dragMode) {
          this.startDring();
        }
      }
      if (matchKey && e.type === 'keyup') {
        this.endDring();
      }
    };
    this.hotkeys.forEach((keyName) => {
      hotkeys(keyName, { keyup: true }, (e) => {
        hotkeyEvent(keyName, e);
      });
    });
  }

  initDring() {
    const canvas = this.canvas;
    // 平移
    canvas.on('mouse:down', (opt) => {
      const checkObjectMovable = this.checkObjectMovable;
      // 鼠标按下时触发
      const evt = opt.e;
      const targetObject = opt.target;
      const onDragState =
        (!opt.transform || opt.transform.action === 'drag') && evt.button === 0;
      // 传入checkObjectMovable且以空白处开始拖拽时，允许拖拽画布
      const onDragWhitespace =
        checkObjectMovable &&
        (!targetObject || !checkObjectMovable(targetObject));
      if (this.dragMode || (onDragState && onDragWhitespace)) {
        canvas.setCursor('grab');
        canvas.isDragging = true; // isDragging 是自定义的，开启移动状态
        canvas.lastPosX = evt.clientX; // lastPosX 是自定义的
        canvas.lastPosY = evt.clientY; // lastPosY 是自定义的
        // 禁止选中
        canvas.selection = false;
        canvas.getObjects().forEach((obj) => {
          obj.beforeCanvasMoveSelectable = obj.selectable;
          obj.selectable = false;
        });
        canvas.requestRenderAll();
      }
    });

    canvas.on('mouse:move', (opt) => {
      // 鼠标移动时触发
      if (canvas.isDragging) {
        const evt = opt.e;
        const vpt = canvas.viewportTransform; // 聚焦视图的转换
        vpt[4] += evt.clientX - canvas.lastPosX;
        vpt[5] += evt.clientY - canvas.lastPosY;
        canvas.requestRenderAll(); // 重新渲染
        canvas.lastPosX = evt.clientX;
        canvas.lastPosY = evt.clientY;
        this.events.forEach((cb) => {
          cb(vpt);
        });
      }
    });

    canvas.on('mouse:up', (opt) => {
      // 鼠标松开时触发
      canvas.setViewportTransform(canvas.viewportTransform); // 设置此画布实例的视口转换
      canvas.isDragging = false; //
      canvas.setCursor('auto');
      // 取消禁止选中
      canvas.selection = this.selection;
      canvas.getObjects().forEach((obj) => {
        obj.selectable =
          typeof obj.beforeCanvasMoveSelectable !== 'undefined'
            ? obj.beforeCanvasMoveSelectable
            : obj.selectable;
        delete obj.beforeCanvasMoveSelectable;
      });
      canvas.requestRenderAll();
    });
  }

  startDring() {
    this.dragMode = true;
    this.canvas.defaultCursor = 'grab';
    this.canvas.renderAll();
  }

  endDring() {
    this.dragMode = false;
    this.canvas.defaultCursor = 'default';
    this.canvas.isDragging = false;
    this.canvas.renderAll();
  }

  onChange(cb) {
    this.events.push(cb);
  }
}
