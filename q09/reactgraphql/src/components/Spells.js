import { gql, useQuery } from '@apollo/client';

const query = gql`
  query Query($index: String) {
    class(index: $index) {
      spells {
        index
        attack_type
        casting_time
        components
        concentration
        desc
        duration
        higher_level
        level
        material
        name
        range
        ritual
      }
    }
  }
`;

export default function Spells({ classIndex }) {
  console.log(classIndex);
  const { loading, error, data } = useQuery(query, {
    variables: { index: classIndex },
  });

  if (loading) return null
  if (error) return <p>Error: {error.message}</p>;

  console.log(data);
  const spells = data.class.spells;

  return (
    <>
      <h1>Class Spells</h1>
      {spells.map(spell => (
        <div key={spell.index}>
          <h3>{spell.name}</h3>
          <p>Level: {spell.level}</p>
          <p>Range: {spell.range}</p>
          <p>Components: {spell.components}</p>
          <p>Material: {spell.material}</p>
          <p>Casting Time: {spell.casting_time}</p>
          <p>Duration: {spell.duration}</p>
          <p>Concentration: {spell.concentration}</p>
          <p>Ritual: {spell.ritual}</p>
          <p>Desc: {spell.desc}</p>
          <p>Higher Level: {spell.higher_level}</p>
          <p>Attack Type: {spell.attack_type}</p>
        </div>
      ))}
    </>
  );
}