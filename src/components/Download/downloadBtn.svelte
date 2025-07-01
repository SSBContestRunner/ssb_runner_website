<script>
    let { children } = $props();
</script>

<button class="w-[8em] rounded-md border-2 py-1 border-primary-400 hover:bg-white cursor-pointer">
    {@render children()}
</button>