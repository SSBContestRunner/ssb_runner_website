<script>
  import Header from "./components/Header.svelte";
  import Main from "./components/Main.svelte";
  import Footer from "./components/Footer.svelte";
  import I18nDialog from "./components/i18nDialog.svelte";

  import { onMount } from "svelte";

  let i18nDialog = null;

  let page = $state("home");

  const toPage = (pageName) => {
    page = pageName;
  };

  const openLanguageSelectDialog = () => {
    if (i18nDialog == null) return;
    i18nDialog.openDialog();
  };
</script>

<div class="min-h-screen flex flex-col">
  <Header highlight={page} {toPage} {openLanguageSelectDialog} />
  <Main {page} {toPage} />
  <Footer />
  <I18nDialog bind:this={i18nDialog} />
</div>
