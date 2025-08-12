<script>
    let { link = '/', show = true, children } = $props();

    let showStyle = $derived(show ? '' : 'invisible')
</script>

<a href={link} target="_blank" class="{showStyle} w-[8em] text-center rounded-md border-2 py-1 border-primary-400 hover:bg-white cursor-pointer">
    {@render children()}
</a>