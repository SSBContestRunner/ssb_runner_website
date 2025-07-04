<script>
    import Index from "./Main/index.svelte";
    import Download from "./Main/download.svelte";

    let { page, toPage } = $props();
</script>

<main class="flex flex-col items-center grow">
    {#if page == "home"}
        <Index {toPage} />
    {:else if page == "download"}
        <Download />
    {/if}
</main>
