const { Client } = require('pg')

const SQL = `
        CREATE TABLE IF NOT EXISTS fruits (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) UNIQUE NOT NULL,
            family VARCHAR(255),
            f_order VARCHAR(255),
            genus VARCHAR(255),
            f_imgs TEXT
        );
    `;

const url = 'https://www.fruityvice.com/api/fruit/all'

async function main() {
    console.log("seeding...");
    const client = new Client({
      connectionString: "postgresql://maamoonsalman:1948@localhost:5432/fruit_inventory",
    });

    const response = await fetch(url)
    const result = await response.json()

    await client.connect();
    await client.query(SQL);
    for (let i = 0; i < 20; i++) {
        const element = result[i];
        await client.query(`INSERT INTO fruits(name,family , f_order ,genus) values($1,$2,$3,$4)`, [
            element.name,
            element.family,
            element.order,
            element.genus
        ])
        
    }
    const fruitImages = {
        Persimmon: 'https://w7.pngwing.com/pngs/288/507/png-transparent-common-persimmon-japanese-persimmon-date-plum-persimmon-natural-foods-food-orange.png',
        Strawberry: 'https://w7.pngwing.com/pngs/983/762/png-transparent-three-strawberries-strawberry-juice-strawberry-juice-shortcake-strawberry-natural-foods-frutti-di-bosco-food.png',
        Banana: 'https://w7.pngwing.com/pngs/955/492/png-transparent-banana-powder-fruit-cavendish-banana-banana-yellow-banana-fruit-food-image-file-formats-banana-leaves.png',
        Tomato: 'https://w7.pngwing.com/pngs/891/45/png-transparent-tomato-juice-pasta-vegetable-fruit-tomato-sliced-tomato-natural-foods-food-tomato.png',
        Pear: 'https://w7.pngwing.com/pngs/164/347/png-transparent-juice-asian-pear-hass-avocado-fruit-flavor-pear-natural-foods-food-eating.png',
        Durian: 'https://w7.pngwing.com/pngs/567/95/png-transparent-soursop-illustration-soursop-juice-durian-fruit-food-durian-belanda-nutrition-melon-fruit.png',
        Blackberry: 'https://w7.pngwing.com/pngs/653/224/png-transparent-blackberry-pie-fruit-blackberry-frutti-di-bosco-food-fruit-nut.png',
        Lingonberry: 'https://w7.pngwing.com/pngs/569/431/png-transparent-lingonberry-cranberry-bilberry-rijk-zwaan-barbados-cherry-corks-miscellaneous-natural-foods-frutti-di-bosco.png',
        Kiwi: 'https://w7.pngwing.com/pngs/945/573/png-transparent-kiwi-fruit-illustration-juice-smoothie-kiwifruit-kiwi-natural-foods-food-citrus.png',
        Lychee: 'https://w7.pngwing.com/pngs/876/451/png-transparent-three-lychees-juice-lychee-fruit-apricot-pitaya-juice-dried-fruit-food-fruit-nut.png',
        Pineapple: 'https://w7.pngwing.com/pngs/620/248/png-transparent-pineapple-fruit-auglis-vegetable-pinapple-food-fruit-nut-watermelon.png',
        Fig: 'https://w7.pngwing.com/pngs/415/167/png-transparent-sliced-fig-fruit-common-fig-fruit-fig-leaf-food-cut-figs-natural-foods-fig-desktop-wallpaper.png',
        Gooseberry: 'https://w7.pngwing.com/pngs/350/144/png-transparent-gooseberry-zante-currant-milkshake-blackcurrant-juice-juice-natural-foods-food-blueberry.png',
        Passionfruit: 'https://w7.pngwing.com/pngs/84/283/png-transparent-sliced-of-purple-fruit-passion-fruit-juice-banana-passionfruit-tropical-fruit-juice-natural-foods-food-tropical-fruit.png',
        Plum: 'https://w7.pngwing.com/pngs/690/875/png-transparent-plum-wine-graphy-food-plum-natural-foods-food-photography.png',
        Orange: 'https://w7.pngwing.com/pngs/1001/506/png-transparent-slices-of-oranges-orange-juice-flavor-fruit-nutritious-orange-natural-foods-food-orange.png',
        GreenApple: 'https://w7.pngwing.com/pngs/769/850/png-transparent-green-apple-juice-apple-pie-flavor-concentrate-green-apple-slice-natural-foods-food-tart.png',
        Raspberry: 'https://w7.pngwing.com/pngs/659/440/png-transparent-raspberry-fruit-raspberry-natural-foods-frutti-di-bosco-food.png',
        Watermelon: 'https://w7.pngwing.com/pngs/871/532/png-transparent-watermelon-watermelon-natural-foods-food-melon.png',
        Lemon: 'https://w7.pngwing.com/pngs/711/905/png-transparent-juice-lemon-lemon-natural-foods-food-citrus.png'
    };

    for (const name in fruitImages) {
        await client.query(
            `UPDATE fruits SET f_imgs = $1 WHERE name = $2`,
            [fruitImages[name], name]
        );
    }

    await client.end();
    console.log("done");
  }

  main();