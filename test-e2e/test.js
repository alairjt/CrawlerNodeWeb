import { Selector } from 'testcafe';

fixture`Crawler WEB`
    .page`http://localhost:3001`;

test('Should be load deputies from API', async t => {
    // Test code
    const firstRow = await Selector('table > tbody').find('tr').nth(0).find('td').nth(0).textContent;

    await t.expect(firstRow).eql('178957');
});

test('Should be load deputy data in edit form', async t => {
    // Test code
    await t.click(Selector('table > tbody').find('tr').nth(0))
        .expect(Selector('#name').exists).ok()
        .expect(Selector('#name').value).eql('ABEL MESQUITA JR.');
});

test('Should be save deputy', async t => {
    // Test code
    await t.click(Selector('table > tbody').find('tr').nth(0));
    await t.click(Selector('#saveButton'))
        .expect(Selector('#snackBar').textContent).eql('Deputy was saved succesfully.Back');
});