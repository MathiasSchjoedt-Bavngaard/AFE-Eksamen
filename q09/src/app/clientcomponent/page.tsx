"use client";

export const dynamic = "force-dynamic";

import { gql, useSuspenseQuery } from "@apollo/client";

const query = gql`query {
  class {
    name
  }
}`

export default function ClientComponent() {
  const { data } = useSuspenseQuery<{ class: { name: string } }>(query);
  return (
    <div>
      {data.class.name}
    </div>
  );
}

