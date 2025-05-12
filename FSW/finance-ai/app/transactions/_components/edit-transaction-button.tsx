"use client";

import { Button } from "@/app/_components/ui/button";
//import UpsertTransactionDialog from "@/app/_components/upsert-transaction-dialog";
import { Transaction } from "@prisma/client";
import { PencilIcon } from "lucide-react";
import { useState } from "react";

interface EditTransactionButtonProps {
  transaction: Transaction;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const EditTransactionButton = ({ transaction }: EditTransactionButtonProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [dialogIsOpen, setDialogIsOpen] = useState(false);

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="text-muted-foreground"
        onClick={() => setDialogIsOpen(true)}
      >
        <PencilIcon />
      </Button>
      {/* <UpsertTransactionDialog
        isOpen={dialogIsOpen}
        setIsOpen={setDialogIsOpen}
        defaultValues={{
          ...transaction,
          amount: Number(transaction.amount),
        }}
        transactionId={transaction.id}
      /> */}
    </>
  );
};

export default EditTransactionButton;
