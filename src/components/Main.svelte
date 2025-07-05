<script>
    import Index from "./Main/index.svelte";
    import Download from "./Main/download.svelte";
    import Extra from "./Extra.svelte";

    let { page, toPage } = $props();
</script>

<main class="flex flex-col items-center min-h-[calc(100svh-52px)]">
    {#if page == "home"}
        <Index {toPage} />
    {:else if page == "download"}
        <Download />
    {/if}
</main>
{#if page == "home"}
    <Extra />
{/if}
