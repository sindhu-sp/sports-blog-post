const { Post } = require('../models');

const postdata = [
  {
    sports_title: 'Donec posuere metus vitae ipsum.',
    post_comments: 'buzzfeed.com/in/imperdiet/et/commodo/vulputate.png',
    user_id: 10
  },
  {
    sports_title: 'Morbi non quam nec dui luctus rutrum.',
    post_comments: 'nasa.gov/donec.json',
    user_id: 8
  },
  {
    sports_title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    post_comments: 'europa.eu/parturient/montes/nascetur/ridiculus/mus/etiam/vel.aspx',
    user_id: 1
  },
  {
    sports_title: 'Nunc purus.',
    post_comments: 'desdev.cn/enim/blandit/mi.jpg',
    user_id: 4
  },
  {
    sports_title: 'Pellentesque eget nunc.',
    post_comments: 'google.ca/nam/nulla/integer.aspx',
    user_id: 7
  },
  {
    sports_title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    post_comments: 'stanford.edu/consequat.png',
    user_id: 4
  },
  {
    sports_title: 'In hac habitasse platea dictumst.',
    post_comments: 'edublogs.org/non/ligula/pellentesque.js',
    user_id: 1
  },
  {
    sports_title: 'Morbi non quam nec dui luctus rutrum.',
    post_comments: 'ucla.edu/consequat/nulla.html',
    user_id: 1
  },
  {
    sports_title: 'Duis ac nibh.',
    post_comments: 'theguardian.com/dui/vel/nisl/duis/ac/nibh.aspx',
    user_id: 9
  },
  {
    sports_title: 'Curabitur at ipsum ac tellus semper interdum.',
    post_comments: 'reverbnation.com/ligula/sit.jpg',
    user_id: 5
  },
  {
    sports_title: 'In hac habitasse platea dictumst.',
    post_comments: 'china.com.cn/lectus/vestibulum.json',
    user_id: 3
  },
  {
    sports_title: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    post_comments: 'networksolutions.com/nam/ultrices/libero/non/mattis/pulvinar.json',
    user_id: 10
  },
  {
    sports_title: 'Donec dapibus.',
    post_comments: 'instagram.com/ac/neque/duis/bibendum/morbi/non.xml',
    user_id: 8
  },
  {
    sports_title: 'Nulla tellus.',
    post_comments: 'lycos.com/natoque/penatibus/et.html',
    user_id: 3
  },
  {
    sports_title: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    post_comments: 'gmpg.org/lorem.jpg',
    user_id: 3
  },
  {
    sports_title:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    post_comments: 'paginegialle.it/mattis/egestas.jsp',
    user_id: 7
  },
  {
    sports_title: 'In hac habitasse platea dictumst.',
    post_comments: 'wikia.com/turpis/eget.jpg',
    user_id: 6
  },
  {
    sports_title: 'Etiam justo.',
    post_comments: 'shareasale.com/quis.json',
    user_id: 4
  },
  {
    sports_title: 'Nulla ut erat id mauris vulputate elementum.',
    post_comments: 'java.com/diam/neque/vestibulum/eget/vulputate/ut/ultrices.png',
    user_id: 6
  },
  {
    sports_title: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    post_comments: 'java.com/at/nibh/in.png',
    user_id: 7
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;