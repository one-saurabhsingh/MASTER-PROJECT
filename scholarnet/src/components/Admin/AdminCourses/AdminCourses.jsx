import {
  Box,
  Button,
  Grid,
  Heading,
  HStack,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import React from 'react';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import cursor from '../../../assets/images/cursor.png';
import Sidebar from '../Sidebar';

const Users = () => {
  const users = [
    {
      name: 'Saurabh Kumar Singh',
      email: 'one.saurabhsingh@gmail.com',
      createdAt: String(new Date().toISOString()),
      avatar: {
        url: 'sadsad',
      },
      role: 'user',
      subscription: {
        status: 'active',
      },
      playlist: [
        {
          course: 'sadsad',
          poster: 'sdassd',
        },
        {
          course: 'sadsad',
          poster: 'sdassd',
        },
        {
          course: 'sadsad',
          poster: 'sdassd',
        },
      ],
    },
  ];
  const updateHandler = () => {
    console.log('updateHandler');
  };
  const deleteButtonHandler = () => {
    console.log('deleteButtonHandler');
  };

  return (
    <Grid
      css={{
        cursor: `url(${cursor}), default`,
      }}
      minH={'100vh'}
      templateColumns={['1fr', '5fr 1fr']}
    >
      <Box p={['0', '16']} overflowX={'auto'}>
        <Heading
          textTransform={'uppercase'}
          children="All Users"
          my="16"
          textAlign={['center', 'left']}
        />

        <TableContainer w={['100vw', 'full']}>
          <Table variant={'simple'} size="lg">
            <TableCaption>All available users in the database</TableCaption>
            <Thead>
              <Tr>
                <Th>Id</Th>
                <Th>Name</Th>
                <Th>Email</Th>
                <Th>Role</Th>
                <Th>Subscription</Th>
                <Th isNumeric>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {users &&
                users.map(item => (
                  <Row
                    updateHandler={updateHandler}
                    deleteButtonHandler={deleteButtonHandler}
                    key={item._id}
                    item={item}
                  />
                ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>

      <Sidebar />
    </Grid>
  );
};

export default Users;

function Row({ item, updateHandler, deleteButtonHandler }) {
  return (
    <Tr>
      <Td>#{item._id}</Td>
      <Td>{item.name}</Td>
      <Td>{item.email}</Td>
      <Td>{item.role}</Td>
      <Td>
        {item.subscription && item.subscription.status === 'active'
          ? 'active'
          : 'not active'}
      </Td>
      <Td isNumeric>
        <HStack justifyContent={'flex-end'}>
          <Button
            onClick={() => updateHandler(item._id)}
            variant={'outline'}
            color="purple.500"
          >
            Change Role
          </Button>

          <Button
            onClick={() => deleteButtonHandler(item._id)}
            color={'purple.600'}
          >
            <RiDeleteBin7Fill />
          </Button>
        </HStack>
      </Td>
    </Tr>
  );
}
