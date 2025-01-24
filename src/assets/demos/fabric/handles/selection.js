export default class FabricSelection {
  constructor(canvas) {
    this.selectEvents = [];
    this.clearEvents = [];
    canvas.on('selection:created', (e) => onObjectsSelect(e));
    canvas.on('selection:updated', (e) => onObjectsSelect(e));
    canvas.on('selection:cleared', (e) => onObjectsSelect(e));

    const onObjectsSelect = (e) => {
      const actives = canvas.getActiveObjects();
      if (actives && actives.length > 0) {
        this.selectEvents.forEach((cb) => {
          cb(actives);
        });
      } else {
        this.clearEvents.forEach((cb) => {
          cb();
        });
      }
    };
  }
  onSelect(cb) {
    this.selectEvents.push(cb);
  }
  onClear(cb) {
    this.clearEvents.push(cb);
  }
}
