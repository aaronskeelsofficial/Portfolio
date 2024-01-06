import { Helmet } from "react-helmet"

export default function(props) {
  return (
    <>
      <Helmet>
        <script>{`
          console.log("aboutme/dummyfiller: running ");
          window.snowflake = `+Math.random()+`;
        `}</script>
      </Helmet>
    </>
  )
};