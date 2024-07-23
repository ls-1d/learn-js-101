let Color = Object.freeze({
    red: 'red',
    green: 'green',
    blue: 'blue',
});

let Size = Object.freeze({
    small: 'small',
    medium: 'medium',
    large: 'large',
});

class Product {
    constructor(name, color, size) {
        this.name = name;
        this.color = color;
        this.size = size;
    }
}

class ProductFilter {
    filterByColor(products, color) {
        return products.filter((p) => p.color === color);
    }

    filterBySize(products, size) {
        return products.filter((p) => p.size === size);
    }

    filterBySizeAndColor() {
        //
    }
}

// specification

class ColorSpecificaton {
    constructor(color) {
        this.color = color;
    }

    isSatisfied(item) {
        return item.size === this.size;
    }
}

let apple = new Product('Apple', Color.green, Size.small);
let tree = new Product('Tree', Color.green, Size.large);
let house = new Product('House', Color.blue, Size.large);

let products = [apple, tree, house];

let pf = new ProductFilter();
console.log(`Green Products (old) `);

// for (let p of pf.filterByColor(products, Color.green)) {
//     console.log(` *${p.name} is green`);
// }

// for (let p of pf.filterBySize(products, Size.large)) {
//     console.log(` *${p.name} is large`);
// }

class BetterFilter {
    filter(items, spec) {
        return items.filter((x) => spec.isSatisfied(x));
    }
}

let bf = new BetterFilter();
console.log(`Green products (new)`);

for (let p of bf.filter(products, new ColorSpecificaton(Color.green))) {
    console.log(p.name, 'is green');
}
