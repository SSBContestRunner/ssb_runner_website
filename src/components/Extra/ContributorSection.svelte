<script>
    let { children } = $props();
</script>

<section class="place-items-center w-full even:bg-primary-400/8">
    <div class="container py-8 px-2 md:px-0">
        {@render children()}
    </div>
</section>
