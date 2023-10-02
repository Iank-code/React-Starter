function Person({ school, location }) {
    console.log(school)
  return (
    <div>
      <h1>
        {school} is located in {location}
      </h1>
    </div>
  );
}

export default Person;
