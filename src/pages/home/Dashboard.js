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
                <h4 className="font-bold text-blue-navy">Categories</h4>
              </div>
              <div className="flex flex-row justify-between text-center">
                {products.map(({ item, image }, index) => (
                  <div className="flex mt-2 flex-col">
                    <div key={index} className="flex flex-col items-center">
                      <ImageCard symbol={image} />
                      <div className="flex flex-col mt-3">
                        <span className="text-sm">{item}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Container>
            <Container display="grid" gridTemplateColumns="40% 58%" padding="5rem 1.5rem">
              <Container display="" padding="0">
                <div>
                  <h4 className="font-bold text-blue-navy">Profitable Items</h4>
                </div>
                <Card boxShadow="2px 3px 5px 0px #ece5e5" width="200px">
                  <div>
                    {items.map(({ title, price }, index) => (
                      <div className="flex items-center justify-between py-1">
                        <div className="flex flex-row items-center justify-between">
                          <span className="rounded-full h-12 w-12 flex items-center justify-center bg-blue-lighter mr-3">
                            {index + 1}
                          </span>
                          <p className="mr-20 font-bold text-blue-navy text-center">{title}</p>
                        </div>
                        <div>
                          {price.includes('+') ? (
                            <span className="rounded-full py-1 px-2 bg-green-light text-green-dark text-xs">
                              {price}
                            </span>
                          ) : (
                            <span className="rounded-full py-1 px-2 bg-red-light text-red-dark text-xs">
                              {price}
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </Container>
              <Container padding="0 1.5rem">
                <div>
                  <h4 className="font-bold text-blue-navy">Sales Statistics</h4>
                </div>
                <Container
                  display="flex"
                  padding="0 1rem"
                  verticalLine
                  flexDirection="row"
                  bordered
                  height="250px"
                >
                  <SimpleBarChart />
                  <SimpleBarChart />
                </Container>
              </Container>
            </Container>
            <Container>
              <Table>{renderTableData()}</Table>
            </Container>
          </MainContent>
          <Aside>
            <div>
              <p className="text-blue-navy font-bold text-sm ml-2">Overview</p>
              <Card boxShadow="2px 3px 5px 0px #ece5e5">
                <div className="grid grid-row divide-y divide divide-gray-light">
                  <div className="flex flex-row justify-between">
                    <div className="w-24 py-4">
                      <p className="font-family text-blue-navy text-center">Total Orders</p>
                      <h4 className="font-bold text-blue-navy text-center">$342.7</h4>
                    </div>
                    <CustomAreaChart stroke="#40966a" fill="#ecfdf5" />
                  </div>
                  <div className="flex flex-row justify-between px-3">
                    <p className="font-normal text-blue-navy mt-4">17 Total items</p>
                    <button className="text-blue mt-4 font-medium">View details</button>
                  </div>
                </div>
              </Card>
              <Card border="1px solid #e6e6e6">
                <div className="grid grid-row divide-y divide divide-gray-light">
                  <div className="flex flex-row justify-between">
                    <div className="w-24 py-4">
                      <p className="font-normal text-blue-navy text-center">Total Orders</p>
                      <h4 className="font-bold text-blue-navy text-center">$342.7</h4>
                    </div>
                    <CustomAreaChart stroke="#f04744" fill="#fef2f2" />
                  </div>
                  <div className="flex flex-row justify-between px-3">
                    <p className="font-normal text-blue-navy mt-4">17 Total items</p>
                    <button className="text-blue mt-4 font-medium">View details</button>
                  </div>
                </div>
              </Card>
            </div>
            <div>
              <p className="text-blue-navy font-bold text-sm ml-2">Latest Activities</p>
              <Card border="1px solid #e6e6e6" flexDirection="column" padding="0.5rem">
                <div className="grid grid-cols divide-y divide p-2 divide-gray-light">
                  <div className="flex justify-between my-2">
                    <div className="flex flex-row">
                      <ImageCard src={sonyImg} />
                      <div className="flex flex-col ml-2">
                        <h4 className="font-bold text-blue-navy text-center">Sony 1000Xm3</h4>
                        <span className="text-sm">Sep 12, 2021</span>
                      </div>
                    </div>
                    <span className="text-red-dark">-$160</span>
                  </div>
                  <div className="flex justify-between mt-2">
                    <div className="flex flex-row mt-4">
                      <ImageCard src={appleImg} />
                      <div className="flex flex-col ml-2">
                        <h4 className="font-bold text-blue-navy text-center">iPhone 11 Pro</h4>
                        <span className="text-sm">Feb 16, 2021</span>
                      </div>
                    </div>
                    <span className="text-green-dark mt-4">+$160</span>
                  </div>
                </div>
                <button className="bg-blue-lighter text-blue-dark px-16 py-4 border-none mt-4 rounded">
                  See All Activities
                </button>
              </Card>
            </div>
            <div>
              <p className="text-blue-navy font-bold text-sm ml-2">Sales Lists</p>
              <Card border="1px solid #e6e6e6" display="block">
                <div className="grid grid-cols p-2">
                  <div className="flex justify-between mt-2">
                    <div className="flex flex-row">
                      <ImageCard symbol="👨🏻" />
                      <div className="flex flex-col">
                        <h4 className="font-bold text-blue-navy text-center">Supardi Hokya</h4>
                        <span className="text-sm ml-2">ID: 567936354739</span>
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
                        <h4 className="font-bold text-blue-navy text-center">Supardi Hokya</h4>
                        <span className="text-sm ml-2">ID: 567936354739</span>
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
                        <h4 className="font-bold text-blue-navy text-center">Supardi Hokya</h4>
                        <span className="text-sm ml-2">ID: 567936354739</span>
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
