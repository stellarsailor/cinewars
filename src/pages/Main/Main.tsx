import { motion } from "framer-motion"
import styled from "styled-components";
import List from "../../components/List";
import DialogBox from "../../components/DialogBox";
import useList from "../../hooks/useList"
import { useEffect, useState } from "react";
import useDialog from "../../hooks/useDialog";

export type MainProps = {}

function Main({}: MainProps) {

  const { list, status, onSetPage } = useList();
  const { dialog, onSetDialog } = useDialog();

  useEffect(() => {
    onSetDialog('The database is now ready, sir! Who are you looking for?')
  },[])

  return (
    <Container>
      <List 
        list={list}
        status={status}
        onSetPage={onSetPage}
      />
      <DialogBox 
        content={dialog.text}
      />
    </Container>
  )
}

const Container = styled.div`
  z-index: 10;
`


export default Main