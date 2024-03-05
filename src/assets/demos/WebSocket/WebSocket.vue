<script setup>
import { WebSocketAuto } from '@blinkjun/utils';
const webSocketAutoInstance = new WebSocketAuto({
  url: 'ws://localhost:8080',
  heartCheckEnable: true,
});

webSocketAutoInstance.addEventListener('message', (e) => {
  console.log(e.data);
});
webSocketAutoInstance.addEventListener('open', (e) => {
  webSocketAutoInstance.send('hello');
});
</script>
