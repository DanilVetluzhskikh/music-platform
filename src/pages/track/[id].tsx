import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { TrackItem } from '@components/trackItem';
import { MainLayout } from 'src/layouts/MainLayout';
import { getOneTrack } from 'src/services/getOneTrack';
import { Track } from '@type/track';

export const TrackId: NextPage = () => {
  const [ item, setItem ] = useState<Track | null>(null);
  const router = useRouter();

  const { id, } = router.query as {id: string};

  useEffect(() => {
    (async () => {
      setItem(await getOneTrack(id));
    })();
  }, [ id ]);

  return (
    <MainLayout>
      <TrackItem item={item} />
    </MainLayout>
  );
};

export default TrackId;