// // src/app/elearn/simulation/[slug]/page.js

// export async function getStaticProps(context) {
//     const { slug } = context.params;

//     // Fetch data based on the slug
//     const res = await fetch(`./elearn/simulation/${slug}`);
//     const data = await res.json();

//     // Pass data to the page via props
//     return { props: { data } };
// }

// const SimulationPage = ({ data }) => {
//     return (
//         <div>
//             <h1>{data.title}</h1>
//             <p>{data.description}</p>
//             {/* Render other data as needed */}
//         </div>
//     );
// };

// export default SimulationPage;
