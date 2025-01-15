import EventEmitter from 'events';
export default class FabricSelection extends EventEmitter {
  constructor(canvas) {
    super();
    canvas.on('selection:created', (e) => onObjectsSelect(e));
    canvas.on('selection:updated', (e) => onObjectsSelect(e));
    canvas.on('selection:cleared', (e) => onObjectsSelect(e));

    const onObjectsSelect = (e) => {
      const actives = canvas.getActiveObjects();
      if (actives && actives.length === 1) {
        this.emit('one', actives[0]);
      } else if (actives && actives.length > 1) {
        this.emit('multiple', actives);
      } else {
        this.emit('clear');
      }
    };
  }
}
