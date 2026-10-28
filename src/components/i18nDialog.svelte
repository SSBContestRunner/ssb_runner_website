<script>
    import Close from "../assets/svgIcon/close.svelte";
    import { getLocale, t } from "../lib/i18n";
    
    let open = $state(false);
    let locale = $state("");

    let showStyle = $derived(open ? "flex" : "hidden");
    let selectStyle = $derived((fromLocale) => {
        let style = locale == fromLocale ? 'bg-primary-400 text-white' : ''
        return style;
    });

    export const openDialog = () => {
        locale = getLocale();
        open = true;
    };

    const closeDialog = () => {
        open = false;
    };

    const selectLanguage = (temp_locale) => {
        locale = temp_locale;
        window.localStorage.setItem('locale', locale);
    };
</script>

<div
    class="z-10 fixed bg-black/50 inset-0 {showStyle} justify-center items-center"
>
    <button class="absolute inset-0 z-10" onclick={closeDialog}>_</button>
    <section
        class="w-full md:w-[25em] bg-slate-50 mx-4 py-4 px-6 rounded-lg z-20"
    >
        <button class="float-right" onclick={closeDialog}>
          <Close />
        </button>
        <h1 class="text-lg font-semibold">{t('i18n_dialog-title')}</h1>
        <div class="my-2 flex">
            <button
                class="border border-primary-400
                {selectStyle('en_us')}
                rounded-l-md px-2 py-1"
                onclick={() => selectLanguage("en_us")}>English</button
            >
            <button
                class="border border-primary-400
                {selectStyle('zh_cn')}
                rounded-r-md px-2 py-1"
                onclick={() => selectLanguage("zh_cn")}>中文(简体)</button
            >
        </div>
        <h3>{t('i18n_dialog-hint')}</h3>
    </section>
</div>
