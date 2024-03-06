import useClipMask from './useClipMask';
export default function (canvas, object) {
  // 自定义遮罩层，用于裁剪时显示黑色半透明背景
  const { updateMask, removeMask } = useClipMask(canvas);
  // 更新
  const updateEvents = [
    'scaled',
    'selected',
    'modified',
    'scaling',
    'moving',
    'rotating',
    'skewing',
  ];
  updateEvents.forEach((key) => {
    object.on(key, () => {
      updateMask(object);
    });
  });
  // 移除
  const removeEvents = ['removed', 'deselected'];
  removeEvents.forEach((key) => {
    object.on(key, removeMask);
  });
}
