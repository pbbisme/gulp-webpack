var table=$('#table').bootstrapTable({
    undefinedText:"无", 
    striped:true,
    selectItemName:"id",
    pagination:true,
    clickToSelect:true,
    columns: [{
        checkbox:true,
        field: 'id',
        title: 'Item ID'
    }, {
        field: 'name',
        title: 'Item Name'
    }, {
        field: 'price',
        title: 'Item Price'
    }],
    data: [{
        id: 1,
        name: 'Item 1',
        price: '$1'
    }, {
        id: 2,
        name: 'Item 2',
        price: '$2'
    }, {
        id: 2,
        name: 'Item 2',
        price: '$2'
    }, {
        id: 2,
        name: 'Item 2',
        price: '$2'
    }, {
        id: 2,
        name: 'Item 2',
        price: '$2'
    }, {
        id: 2,
        name: 'Item 2',
        price: '$2'
    }, {
        id: 2,
        name: 'Item 2',
        price: '$2'
    }, {
        id: 2,
        name: 'Item 2',
        price: '$2'
    }, {
        id: 2,
        name: 'Item 2',
        price: '$2'
    }, {
        id: 2,
        name: 'Item 2',
        price: '$2'
    }, {
        id: 2,
        name: 'Item 2',
        price: '$2'
    }, {
        id: 2,
        name: 'Item 2',
        price: '$2'
    }, {
        id: 2,
        name: 'Item 2',
        price: '$2'
    }, {
        id: 2,
        name: 'Item 2',
        price: '$2'
    }, {
        id: 2,
        name: 'Item 2',
        price: '$2'
    }, {
        id: 2,
        name: 'Item 2',
        price: '$2'
    }, {
        id: 2,
        name: 'Item 2',
        price: '$2'
    }, {
        id: 2,
        name: 'Item 2',
        price: '$2'
    }, {
        id: 2,
        name: 'Item 2',
        price: '$2'
    }, {
        id: 2,
        name: 'Item 2',
        price: '$2'
    }, {
        id: 2,
        name: 'Item 2',
        price: '$2'
    }, {
        id: 2,
        name: 'Item 2',
        price: '$2'
    }, {
        id: 2,
        name: 'Item 2',
        price: '$2'
    }, {
        id: 2,
        name: 'Item 2',
        price: '$2'
    }, {
        id: 2,
        name: 'Item 2',
        price: '$2'
    }, {
        id: 2,
        name: 'Item 2',
        price: '$2'
    }, {
        id: 2,
        name: 'Item 2',
        price: '$2'
    }, {
        id: 2,
        name: 'Item 2',
        price: '$2'
    }, {
        id: 2,
        name: 'Item 2',
        price: '$2'
    }, {
        id: 2,
        name: 'Item 2',
        price: '$2'
    }, {
        id: 2,
        name: 'Item 2',
        price: '$2'
    }, {
        id: 2,
        name: 'Item 2',
        price: '$2'
    }, {
        id: 2,
        name: 'Item 2',
        price: '$2'
    }, {
        id: 2,
        name: 'Item 2',
        price: '$2'
    }, {
        id: 2,
        name: 'Item 2',
        price: '$2'
    }, {
        id: 2,
        name: 'Item 2',
        price: '$2'
    }, {
        id: 2,
        name: 'Item 2',
        price: '$2'
    }, {
        id: 2,
        name: 'Item 2',
        price: '$2'
    }]
});
console.log($('#table').bootstrapTable('getData'))
debugger;