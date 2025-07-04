<script>
    import { getLocale } from "../lib/i18n";

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
        window.localStorage.setItem('locale', locale);
    };

    const selectLanguage = (temp_locale) => {
        locale = temp_locale;
    };
</script>

<div
    class="z-10 absolute bg-black/50 inset-0 {showStyle} justify-center items-center"
>
    <button class="absolute inset-0 z-10" onclick={closeDialog}>_</button>
    <section
        class="w-full md:w-[16em] bg-slate-50 mx-4 py-4 px-6 rounded-lg z-20"
    >
        <button class="float-right" onclick={closeDialog}>x</button>
        <h1 class="text-lg font-semibold">Select Language</h1>
        <div class="mt-4 flex">
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
    </section>
</div>
