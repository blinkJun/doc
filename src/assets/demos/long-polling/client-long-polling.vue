<script setup>
import { Polling } from '@blinkjun/utils';
const pollingInstance = new Polling({
  request: () => {
    return fetch('http://localhost:8080/subscribe?timestamp=' + Date.now());
  },
});
pollingInstance.addEventListener('update', async (res) => {
  console.log(await res.detail.json());
});
pollingInstance.addEventListener('end', () => {
  console.log('end');
});
pollingInstance.start();
</script>
