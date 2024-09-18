export default function Profile({ name, imageUrl, profession, awards, discovery }) {
  return (
    <div>
      <section className="profile">
      <h2>{name}</h2>
        <img
          className="avatar"
          src={imageUrl}
          alt={name}
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Profession: </b> 
            {profession}
          </li>
          <li>
            <b>Awards: 4 </b> 
      {awards.map((award) => (
	  <span key={award}>{award}, </span>
      ))}
          </li>
          <li>
      <b>Discovered: </b>
      {discovery}
          </li>
        </ul>
      </section>
      </div>      
  );
}
