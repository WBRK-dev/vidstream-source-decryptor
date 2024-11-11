export default async function(sourceId) {
    console.log(`Vidstream source id: ${sourceId}`);

    const page = await process.puppeteerManager.getPage();
}
