import { NextPage } from 'next';
import React from 'react';
import { ListTracks } from '@components/list';
import { MainLayout } from 'src/layouts/MainLayout';

const App: NextPage = () => (
  <MainLayout>
    <ListTracks />
  </MainLayout>
);

export default App;