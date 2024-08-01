<template>
    <div>
        <elems-character-list></elems-character-list>
        <button @click="exportToPdf" class="load">скачать</button>
   </div>
</template>

<script>
import html2pdf from 'html2pdf.js'
import ElemsCharacterList from './ElemsCharacterList.vue';
export default {
methods: {
    exportToPdf() {

        const pdfElem = document.querySelector('.charlist');
        const opt = {
            filename: 'foe-charlist.pdf',
            html2canvas: {scale: 4},
        };
        html2pdf().set(opt).from(pdfElem).save();
    }
},
components: {
        ElemsCharacterList
    }
}
</script>

<style>

</style>