import React, { useEffect, useState } from 'react';

import { connect, useDispatch } from 'react-redux';

import {
  Content,
  Main,
  Wrap,
  MainContent,
  SearchContainer,
  Container,
  Button,
  Aside,
} from './DashboardHome.style';
import Sidebar from '../../components/sidebar/Sidebar';
import SearchIcon from '../../assets/icons/search';
import Card from '../../components/shared/Card';
import ImageCard from '../../components/shared/ImageCard';
import CustomAreaChart from '../../components/shared/AreaChart';
import SimpleBarChart from '../../components/shared/SimpleBarChart';
import sonyImg from '../../assets/icons/sony.png';
import appleImg from '../../assets/icons/apple.png';
import { hideToolTipCard, showToolTipCard } from '../../redux/tooltip';
import MenuToolTip from '../../components/menuCard/MenuToolTip';
import Table from '../../components/table/Table';
import TableRowProduct from '../../components/table/TableRowProduct';

const products = [
  {
    item: 'Newest',
    image: '🔥',
  },
  {
    item: 'Promos',
    image: '💵',
  },
  {
    item: 'Fruits',
    image: '🥑',
  },
  {
    item: 'Herbs',
    image: '💊',
  },
  {
    item: 'Beverages',
    image: '🍹',
  },
  {
    item: 'Beverages',
    image: '🍹',
  },
  {
    item: 'Music',
    image: '🎻',
  },
  {
    item: 'Bakery',
    image: '🍪',
  },
  {
    item: 'Toys',
    image: '🎯',
  },
  {
    item: 'Electronics',
    image: '📱',
  },
  {
    item: 'Baby',
    image: '🍼',
  },
  {
    item: 'Plants',
    image: '💐',
  },
];

const items = [
  {
    title: 'Bakery',
    price: '+$12',
  },
  {
    title: 'Electronics',
    price: '-$12',
  },
  {
    title: 'Plants',
    price: '+$12',
  },
];

const orders = [
  {
    name: 'Sony 1000Xm3',
    price: '$800',
    variant: 'Black',
    stock: '1.300',
    status: 'canceled',
  },
  {
    name: 'IPhone 11 Pro',
    price: '$1200',
    variant: 'Grey',
    stock: '2.484',
    status: 'completed',
  },
  {
    name: 'Redmi Note 9 Pro',
    price: '$300',
    variant: 'Blue',
    stock: '1.240',
    status: 'canceled',
  },
  {
    name: 'Jbl T110',
    price: '$100',
    variant: 'White',
    stock: '2.340',
    status: 'completed',
  },
];

const DashboardHome = ({ showToolTip }) => {
  const [top, setTop] = useState(0);
  const [icon, setIcon] = useState('');
  const [description, setDescription] = useState('');
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(hideToolTipCard());
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const y = e.clientY;
      setTop(y - 80);
    };

    /** USE GLOBAL WINDOW TO LISTEN FOR CLICKS OUTSIDE OPTIONS */
    window.addEventListener('mouseover', handleMouseMove);

    return () => {
      window.removeEventListener('mouseover', handleMouseMove);
    };
  }, []);
  const handleMouseOver = (text, index) => {
    setIcon(text);
    switch (text) {
      case 'home':
        setTitle('Home');
        setDescription(`Hi, this is ${text} where it all begins. Have fun.`);
        break;
      case 'star':
        setTitle('Favorite');
        setDescription('For a list of your favorite stuffs, hop in here.');
        break;
      case 'bookmark':
        setTitle('Bookmark');
        setDescription(`Found something interesting? ${text} them, for later`);
        break;
      case 'send':
        setTitle('Message');
        setDescription('Send a message');
        break;
      case 'clock':
        setTitle('History');
        setDescription('For history of your transactions');
        break;
      case 'trash':
        setTitle('Trash');
        setDescription('For history of your transactions');
        break;
      case 'setting':
        setTitle('Setting');
        setDescription('For history of your transactions');
        break;
      case 'person':
        setTitle('User');
        setDescription('Your profile session');
        break;
      case 'exit':
        setTitle('Exit');
        setDescription('If you ever feel like cooling of a bit');
        break;

      default:
        break;
    }
    dispatch(showToolTipCard());
  };

  const handleMouseLeave = () => {
    dispatch(hideToolTipCard());
    setDescription('');
  };

  const renderTableData = () => {
    return (
      <>
        {orders.map((item, i) => (
          <TableRowProduct key={i}>{item}</TableRowProduct>
        ))}
      </>
    );
  };

  return (
    <Content>
      <Wrap>
        <Sidebar handleMouseOver={handleMouseOver} handleMouseLeave={handleMouseLeave} />
        <MenuToolTip
          top={top}
          visible={showToolTip}
          icon={icon}
          description={description}
          title={title}
        />
        <Main>
          <MainContent>
            <Container display="flex">
              <SearchContainer>
                <SearchIcon />
                <input
                  type="text"
                  name="search"
                  id="search"
                  className="focus:outline-none flex-1 block w-full"
                  placeholder="Search everything"
                />
              </SearchContainer>
              <Button>Add new item</Button>
            </Container>
            <Container display="flex" flexDirection="column">
              <div>
                <h4>Categories</h4>
              </div>
              <div className="flex flex-row justify-between text-center">
                {products.map(({ item, image }, index) => (
                  <div className="flex mt-2 flex-col">
                    <div key={index} className="flex flex-col">
                      <ImageCard symbol={image} />
                      <div className="flex flex-col">
                        <strong>{item}</strong>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Container>
            <Container display="grid" gridTemplateColumns="30% 70%">
              <Container display="">
                <div>
                  <h4>Profitable Items</h4>
                </div>
                <Card boxShadow="2px 3px 5px 0px #ece5e5" width="200px">
                  <div>
                    {items.map(({ title, price }, index) => (
                      <div className="flex items-center justify-between">
                        <div className="flex flex-row items-center justify-between">
                          <span className="rounded-full h-12 w-12 flex items-center justify-center bg-blue-50">
                            {index + 1}
                          </span>
                          <p>{title}</p>
                        </div>
                        <div>
                          <span className="rounded-full py-1 px-2 bg-green-50 text-green-400 text-xs">
                            {price}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </Container>
              <Container display="">
                <SimpleBarChart />
              </Container>
            </Container>
            <Container>
              <Table>{renderTableData()}</Table>
            </Container>
          </MainContent>
          <Aside>
            <div>
              <p>Overview</p>
              <Card boxShadow="2px 3px 5px 0px #ece5e5">
                <div className="grid grid-row divide-y divide">
                  <div className="flex flex-row justify-between">
                    <div>
                      <span>Total Orders</span>
                      <h4>$342.7</h4>
                    </div>
                    <CustomAreaChart stroke="#40966a" fill="#ecfdf5" />
                  </div>
                  <div className="flex flex-row justify-between">
                    <p>17 Total items</p>
                    <button>View details</button>
                  </div>
                </div>
              </Card>
              <Card border="1px solid #e6e6e6">
                <div className="grid grid-row divide-y divide">
                  <div className="flex flex-row justify-between">
                    <div>
                      <span>Total Orders</span>
                      <h4>$342.7</h4>
                    </div>
                    <CustomAreaChart stroke="#f04744" fill="#fef2f2" />
                  </div>
                  <div className="flex flex-row justify-between">
                    <p>17 Total items</p>
                    <button>View details</button>
                  </div>
                </div>
              </Card>
            </div>
            <div>
              <p>Latest Activities</p>
              <Card border="1px solid #e6e6e6" display="block">
                <div className="grid grid-cols divide-y divide p-2">
                  <div className="flex justify-between my-2">
                    <div className="flex flex-row">
                      <ImageCard src={sonyImg} />
                      <div className="flex flex-col">
                        <strong>Sony 1000Xm3</strong>
                        <span>Sep 12, 2021</span>
                      </div>
                    </div>
                    <span className="text-red-500">-$160</span>
                  </div>
                  <div className="flex justify-between mt-2">
                    <div className="flex flex-row">
                      <ImageCard src={appleImg} />
                      <div className="flex flex-col">
                        <strong>iPhone 11 Pro</strong>
                        <span>Feb 16, 2021</span>
                      </div>
                    </div>
                    <span className="text-red-500">-$160</span>
                  </div>
                </div>
              </Card>
            </div>
            <div>
              <p>Sales Lists</p>
              <Card border="1px solid #e6e6e6" display="block">
                <div className="grid grid-cols p-2">
                  <div className="flex justify-between mt-2">
                    <div className="flex flex-row">
                      <ImageCard symbol="👨🏻" />
                      <div className="flex flex-col">
                        <strong>Supardi Hokya</strong>
                        <span>ID: 567936354739</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
              <Card border="1px solid #e6e6e6" display="block">
                <div className="grid grid-cols p-2">
                  <div className="flex justify-between mt-2">
                    <div className="flex flex-row">
                      <ImageCard symbol="👨‍🦳" />
                      <div className="flex flex-col">
                        <strong>Supardi Hokya</strong>
                        <span>ID: 567936354739</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
              <Card border="1px solid #e6e6e6" display="block">
                <div className="grid grid-cols p-2">
                  <div className="flex justify-between mt-2">
                    <div className="flex flex-row">
                      <ImageCard symbol="👲" />
                      <div className="flex flex-col">
                        <strong>Supardi Hokya</strong>
                        <span>ID: 567936354739</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </Aside>
        </Main>
      </Wrap>
    </Content>
  );
};

const mapStateToProps = (state) => ({
  showToolTip: state.tooltip.showToolTip,
});

const connectedDashboard = connect(mapStateToProps)(DashboardHome);

export default connectedDashboard;
