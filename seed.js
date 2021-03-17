require('dotenv').config();
const mongoose = require('mongoose');

const { DB_HOST, DB_USER, DB_PASS, DB_NAME } = process.env;
mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}`, {
  dbName: DB_NAME,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const countriesData = [
  {
    name: 'Brazil',
    imageUrl:
      'https://goodtimetravel.ru/wp-content/uploads/2019/10/gavan_rio_de_zhaneyro_2.jpg',
    videoUrl: '5STHnV-ZRfE',
    gallery: [
      {
        img: 'https://top10.travel/wp-content/uploads/2016/05/iguasu.jpg',
      },
      {
        img:
          'https://top10.travel/wp-content/uploads/2016/05/statuya-khrista-iskupitelya.jpg',
      },
      {
        img: 'https://top10.travel/wp-content/uploads/2016/05/pantanal.jpg',
      },
      {
        img:
          'https://top10.travel/wp-content/uploads/2016/05/salvador-baiya.jpg',
      },
      {
        img:
          'https://top10.travel/wp-content/uploads/2016/05/vodopad-karakol.jpg',
      },
      {
        img: 'https://top10.travel/wp-content/uploads/2016/05/ipanema.jpg',
      },
    ],
  },
  {
    name: 'Italy',
    imageUrl:
      'https://www.atlanticcouncil.org/wp-content/uploads/2020/09/Rome-coroavirus-large-1024x683.jpg',
    videoUrl: 'FlRwssZYRM0',
    gallery: [
      {
        img:
          'https://top10.travel/wp-content/uploads/2014/10/grand-canal-veneciya.jpg',
      },
      {
        img: 'https://top10.travel/wp-content/uploads/2014/10/kolizey.jpg',
      },
      {
        img:
          'https://top10.travel/wp-content/uploads/2014/10/casteldelmonte.jpg',
      },
      {
        img:
          'https://top10.travel/wp-content/uploads/2014/10/pizanskaya-bashnya.jpg',
      },
      {
        img:
          'https://top10.travel/wp-content/uploads/2014/10/milansky-sobor.jpg',
      },
      {
        img: 'https://top10.travel/wp-content/uploads/2014/10/fontan-trevi.jpg',
      },
    ],
  },
  {
    name: 'Spain',
    imageUrl:
      'https://abstour.by/upload/iblock/39b/39b113eee670389355bc92b6be574b44.jpg',
    videoUrl: 'IftfIk-pRwI',
    gallery: [
      {
        img:
          'https://top10.travel/wp-content/uploads/2014/09/hram-sviatogo-semeistva.jpg',
      },
      {
        img:
          'https://top10.travel/wp-content/uploads/2014/09/dom-mila-balo.jpg',
      },
      {
        img:
          'https://top10.travel/wp-content/uploads/2014/09/goticheskiy-kvartal.jpg',
      },
      {
        img:
          'https://top10.travel/wp-content/uploads/2014/09/ploshhad-ispanii.jpg',
      },
      {
        img: 'https://top10.travel/wp-content/uploads/2014/09/park-guyelya.jpg',
      },
      {
        img:
          'https://top10.travel/wp-content/uploads/2014/09/alkasar-v-segovii.jpg',
      },
    ],
  },
  {
    name: 'USA',
    imageUrl:
      'https://aif-s3.aif.ru/images/021/486/ee42297d09cbe676f8580c86b2d603c2.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=yRJFLKm7-Nk',
    gallery: [
      {
        img:
          'https://top10.travel/wp-content/uploads/2014/09/statuya-svobody.jpg',
      },
      {
        img: 'https://top10.travel/wp-content/uploads/2014/09/rushmore.jpg',
      },
      {
        img:
          'https://top10.travel/wp-content/uploads/2014/09/most-zolotye-vorota.jpg',
      },
      {
        img: 'https://top10.travel/wp-content/uploads/2014/09/times-square.jpg',
      },
      {
        img: 'https://top10.travel/wp-content/uploads/2014/09/grand-canyon.jpg',
      },
      {
        img:
          'https://top10.travel/wp-content/uploads/2014/09/kamni-v-doline-smerti.jpg',
      },
    ],
  },
  {
    name: 'Australia',
    imageUrl: 'https://kipmu.ru/wp-content/uploads/avstrlya-696x440.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=zJvCrUlzSvc',
    gallery: [
      {
        img:
          'https://top10.travel/wp-content/uploads/2014/12/bolshoy-barierniy-rif.jpg',
      },
      {
        img:
          'https://top10.travel/wp-content/uploads/2014/12/sydney_opera_house_sails.jpg',
      },
      {
        img:
          'https://top10.travel/wp-content/uploads/2014/12/zdanie-korolevy-viktorii.jpg',
      },
      {
        img: 'https://top10.travel/wp-content/uploads/2014/12/muzeya-mona.jpg',
      },
      {
        img:
          'https://top10.travel/wp-content/uploads/2014/12/katorzhnoe-poselenie-port-artur.jpg',
      },
      {
        img:
          'https://top10.travel/wp-content/uploads/2014/12/korolevskiy-sad-sidneya.jpg',
      },
    ],
  },
  {
    name: 'England',
    imageUrl:
      'https://n1s1.hsmedia.ru/0d/c3/bc/0dc3bc2381a2e155424ca7a682419ada/620x462_1_94ce4a400cea100bb26d548921ee012f@1000x745_0xac120003_13763038881563803374.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=ZS2v51y8TiU',
    gallery: [
      {
        img:
          'https://top10.travel/wp-content/uploads/2015/05/tauerskij-most-1.jpg',
      },
      {
        img: 'https://top10.travel/wp-content/uploads/2015/05/stounkhendzh.jpg',
      },
      {
        img:
          'https://top10.travel/wp-content/uploads/2015/05/londonskiy-glaz.jpg',
      },
      {
        img:
          'https://top10.travel/wp-content/uploads/2015/05/bashnya-elizavety.jpg',
      },
      {
        img:
          'https://top10.travel/wp-content/uploads/2015/05/vindzorskij-zamok.jpg',
      },
      {
        img:
          'https://top10.travel/wp-content/uploads/2015/05/uollaton-holl.jpg',
      },
    ],
  },
  {
    name: 'Irland',
    imageUrl:
      'https://www.svoiludi.ru/images/tb/13800/puteshestvie-po-strane-keltov-tur-14988417544745_w687h357.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=ZbNZYm87kE',
    gallery: [
      {
        img:
          'https://top10.travel/wp-content/uploads/2017/02/kellskaya-kniga.jpg',
      },
      {
        img:
          'https://top10.travel/wp-content/uploads/2017/02/dublinskiy-zamok.jpg',
      },
      {
        img:
          'https://top10.travel/wp-content/uploads/2017/02/sobor-svyatogo-patrika.jpg',
      },
      {
        img:
          'https://top10.travel/wp-content/uploads/2017/02/nacionalnyj-muzej-irlandii.jpg',
      },
      {
        img:
          'https://top10.travel/wp-content/uploads/2017/02/tyurma-kilmyenhem.jpg',
      },
      {
        img:
          'https://top10.travel/wp-content/uploads/2017/02/most-semyuela-bekketa.jpg',
      },
    ],
  },
  {
    name: 'France',
    imageUrl:
      'https://www.biletik.aero/upload/resize_cache/format_converted/0174a292e2ce40327282349518386ec2.webp',
    videoUrl: 'https://www.youtube.com/watch?v=8f2tVaHQumM',
    gallery: [
      {
        img:
          'https://top10.travel/wp-content/uploads/2014/09/eyfeleva-bashnya.jpg',
      },
      {
        img:
          'https://top10.travel/wp-content/uploads/2014/09/triumfalnaya-arka-1.jpg',
      },
      {
        img: 'https://top10.travel/wp-content/uploads/2014/09/luvr.jpg',
      },
      {
        img:
          'https://top10.travel/wp-content/uploads/2014/09/disneyland-paris.jpg',
      },
      {
        img:
          'https://top10.travel/wp-content/uploads/2014/09/versalskiy-dvorec.jpg',
      },
      {
        img:
          'https://top10.travel/wp-content/uploads/2014/09/sad-kloda-mone.jpg',
      },
    ],
  },
];

const connection = mongoose.connection;
connection.on('error', console.error.bind(console, 'connection error:'));
connection.once('open', async function () {
  console.log('dropping existing collections');
  const { db } = connection;
  const droppableCollections = ['galleries', 'countries'];
  const existingCollections = await db.listCollections().toArray();
  existingCollections.forEach((collection) => {
    if (droppableCollections.includes(collection.name)) {
      db.dropCollection(collection.name);
    }
  });
  console.log('inserting seed data');
  countriesData.map(async (country) => {
    const { gallery, ...countryData } = country;
    const galleryIds = [];
    if (Array.isArray(gallery) && gallery.length > 0) {
      const galRes = await db.collection('galleries').insertMany(gallery);
      galRes.ops.forEach(({ _id }) => galleryIds.push(_id));
    }
    return await db.collection('countries').insertOne({
      ...countryData,
      gallery: galleryIds,
    });
  });
  console.log('finish');
});
