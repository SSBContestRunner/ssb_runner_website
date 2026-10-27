<script>
    let { children, link = '' } = $props();
</script>

<a class="w-[10em] text-center rounded-md border-2 py-1 border-primary-400 hover:bg-white cursor-pointer {link == '' ? 'invisible' : ''}" href={link}>
    {@render children()}
</a>
