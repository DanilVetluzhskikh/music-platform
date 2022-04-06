import { NextPage } from 'next';
import React from 'react';
import { Search } from '@components/search';
import { MainLayout } from 'src/layouts/MainLayout';

const Index: NextPage = () => (
  <MainLayout>
    <Search />
  </MainLayout>
);

export default Index;