import Link from "next/link";

import { User } from "../interfaces";

type Props = {
  data: User;
};

const ListItem: React.FC<Props> = ({ data }: Props) => (
  <Link href="/users/[id]" as={`/users/${data.id}`}>
    <a href="/users/[id]">
      {data.id}: {data.name}
    </a>
  </Link>
);

export default ListItem;
