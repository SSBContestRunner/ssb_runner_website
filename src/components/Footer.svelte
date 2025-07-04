<script>
    import Logo from "../assets/svgIcon/logo.svelte";
    import Copyleft from "../assets/svgIcon/copyleft.svelte";

    import { t } from '../lib/i18n.js';
</script>

<footer class="place-items-center py-8 bg-gray-100 px-2 md:px-0">
    <div class="container flex justify-between items-center">
        <scetion class="text-gray-400">
            <h1>{t('footer-line1')}</h1>
            <h1>{t('footer-line2')}</h1>
            <h1 class="flex items-center gap-1"><Copyleft />SSB Runner 2025</h1>
        </scetion>
        <Logo size="8em" />
    </div>
</footer>