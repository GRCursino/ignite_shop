import Link from "next/link"
import { ImageContainer, SuccessContainer } from "../styles/pages/success"
import { GetServerSideProps } from "next"
import { stripe } from "../lib/stripe"

export default function Success(){
  return (
    <SuccessContainer>
      <h1>Compra efetuada!</h1>

      <ImageContainer>

      </ImageContainer>

      <p>
        Uhuul <strong>Guilherme Cursino</strong>, sua <strong>Camiseta Fabio Melzinho</strong> já está a caminho da sua casa.
      </p>

      <Link href={"/"}>
        Voltar ao catálogo
      </Link>
    </SuccessContainer>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const sessionId = String(query.session_id);
  
  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product']
  })

  const customerName = session.customer_details.name;
  

  return {
    props: {

    }
  }
}