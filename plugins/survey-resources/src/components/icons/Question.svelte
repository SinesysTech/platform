<script lang="ts">
  export let size: 'small' | 'medium' | 'large'
  export let fill: string = 'currentColor'
</script>

<svg class="svg-{size}" {fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path
    d="M12,22.5C6.2,22.5,1.5,17.8,1.5,12C1.5,6.2,6.2,1.5,12,1.5c5.8,0,10.5,4.7,10.5,10.5C22.5,17.8,17.8,22.5,12,22.5z M12,3.5c-4.7,0-8.5,3.8-8.5,8.5c0,4.7,3.8,8.5,8.5,8.5c4.7,0,8.5-3.8,8.5-8.5C20.5,7.3,16.7,3.5,12,3.5z"
  />
  <path d="M12,18.3c-0.6,0-1-0.4-1-1s0.4-1,1-1s1,0.4,1,1v0C13,17.8,12.6,18.3,12,18.3z" />
  <path
    d="M12,14.6c-0.5,0-1-0.4-1-0.9c0-0.6,0.1-1.1,0.4-1.6c0.3-0.5,0.8-0.8,1.3-1c0.2-0.1,0.5-0.2,0.6-0.4c0.2-0.2,0.3-0.4,0.4-0.7c0.1-0.3,0.1-0.5,0-0.8c0-0.3-0.2-0.5-0.3-0.7c-0.2-0.2-0.4-0.4-0.6-0.5c-0.2-0.1-0.5-0.1-0.8-0.2c-0.3,0-0.5,0.1-0.8,0.2c-0.2,0.1-0.5,0.3-0.6,0.5c-0.3,0.4-1,0.5-1.4,0.2c-0.4-0.3-0.5-1-0.2-1.4c0.3-0.5,0.8-0.8,1.3-1.1c0.5-0.3,1.1-0.4,1.7-0.4c0.6,0,1.2,0.1,1.7,0.4c0.5,0.3,1,0.6,1.3,1.1c0.3,0.5,0.6,1,0.7,1.6c0.1,0.6,0.1,1.2-0.1,1.7c-0.2,0.6-0.5,1.1-0.8,1.5c-0.4,0.4-0.9,0.8-1.4,1c-0.1,0.1-0.2,0.1-0.3,0.2C13,13.3,13,13.4,13,13.5C13,14.1,12.6,14.5,12,14.6C12,14.6,12,14.6,12,14.6z"
  />
</svg>
