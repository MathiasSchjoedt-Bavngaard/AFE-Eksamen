import { gql } from "@apollo/client";
import { getClient } from "../../../lib/apolloClientServer";
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'

type Data = {
    class: {
        name: string;
    }
}

const query = gql` query {
  class {
    name
  }
}`

export const getServerSideProps = (async () => { 
    const client = getClient();

    const { data } = await client.query({query});

    return {
        props: {
            data,
        },
    };
}) satisfies GetServerSideProps<{ data: Data}>

export default function Page({
    data,
  }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return (
      <main>
        <p>{data.class.name}</p>
      </main>
    )
}
