<script lang="ts">
    import importer from "@/utils/importer";
    const currentFileName = importer(import.meta.url);
</script>

<h4>Loaded Window: {currentFileName}</h4>
