'use client';
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import {
  Avatar,
  Button,
  Collapse,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  FormControlLabel,
  Grid,
  IconButton,
  Paper,
  Stack,
  Switch,
  TextField,
  Typography,
} from '@mui/material';
import { useState } from 'react';

const MemberItem = (props) => {
  const { member, members, setAddPaymentOpen, setSelectedMember } = props;

  const [isItemOpen, setIsItemOpen] = useState(false);
  return (
    <Paper
      key={member.id}
      variant="outlined"
      sx={{
        p: 2,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        width="100%"
      >
        <Stack direction="row" alignItems="center" spacing={2}>
          <Avatar />
          <Typography>
            {member.id}. {member.name}
          </Typography>
        </Stack>
        <Button
          onClick={() => {
            setAddPaymentOpen(true);
            const memberWithNewPayment = {
              ...member,
              payments: [
                ...member.payments,
                {
                  id: member.payments.length + 1,
                  description: '',
                  membersSharedPayment: members.map(({ id }) => ({
                    id,
                    amount: '',
                  })),
                },
              ],
            };
            setSelectedMember(memberWithNewPayment);
          }}
        >
          Add Payment
        </Button>
      </Stack>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        width="100%"
        mt={2}
      >
        <Typography>
          Total Paid:{' '}
          {member.payments
            .flatMap((p) => p.membersSharedPayment)
            .reduce((total, { amount }) => total + parseFloat(amount || '0'), 0)
            .toFixed(2)}
        </Typography>
        {member.payments.length ? (
          <IconButton
            color="primary"
            onClick={() => setIsItemOpen((prev) => !prev)}
          >
            {!isItemOpen ? <KeyboardArrowDown /> : <KeyboardArrowUp />}
          </IconButton>
        ) : undefined}
      </Stack>
      <Collapse in={isItemOpen} sx={{ width: '100%' }}>
        <Divider sx={{ my: 2 }} />
        <Stack width="100%">
          <Typography fontWeight="bold" fontSize={20}>
            Payment Details :
          </Typography>
          <Stack spacing={2} mt={3}>
            {member?.payments?.map(
              ({ id, description, membersSharedPayment }) => (
                <Paper
                  variant="outlined"
                  key={id}
                  sx={{
                    p: 2,
                    borderRadius: 3,
                  }}
                >
                  <Typography>
                    {id}.{description}
                  </Typography>
                  {membersSharedPayment?.map(({ id, amount }) => (
                    <Typography key={id}>
                      {members.find((m) => m.id === id)?.name} : {amount}
                    </Typography>
                  ))}
                </Paper>
              ),
            )}
          </Stack>
        </Stack>
      </Collapse>
    </Paper>
  );
};

const ShareCalculator = () => {
  const [memberName, setMemberName] = useState('');
  const [members, setMembers] = useState([]);
  const [addPaymentOpen, setAddPaymentOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState();
  const [splitEqually, setSplitEqually] = useState(true);
  const [paymentAmount, setPaymentAmount] = useState('');
  const [isCalculateModalOpen, setIsCalculateModalOpen] = useState(false);
  const [results, setResults] = useState([]);

  const handleAddMember = () => {
    if (!memberName.trim()) return;
    const newMember = {
      id: members.length + 1,
      name: memberName.trim(),
      payments: [],
    };
    const allMembers = [...members, newMember];
    const updatedMembers = allMembers.map((member) => ({
      ...member,
      payments: [],
    }));
    setMembers(updatedMembers);
    setMemberName('');
  };

  const handleAddPayment = () => {
    if (!selectedMember) return;
    const updatedMembers = [...members];
    const memberIndex = updatedMembers.findIndex(
      (m) => m.id === selectedMember.id,
    );
    if (memberIndex === -1) return;
    const updatedMember = { ...selectedMember };
    if (paymentAmount) {
      if (splitEqually) {
        const perPayment =
          parseFloat(paymentAmount) /
          (selectedMember.payments[selectedMember?.payments.length - 1]
            ?.membersSharedPayment?.length || 1);
        updatedMember.payments[
          updatedMember?.payments.length - 1
        ].membersSharedPayment = selectedMember?.payments[
          selectedMember?.payments.length - 1
        ]?.membersSharedPayment.map(({ id }) => ({
          id,
          amount: perPayment.toString(),
        }));
      } else {
        updatedMember.payments[
          selectedMember?.payments.length - 1
        ].membersSharedPayment = [
          // eslint-disable-next-line no-unsafe-optional-chaining
          ...selectedMember.payments[selectedMember?.payments.length - 1]
            ?.membersSharedPayment,
        ];
      }
    }
    updatedMembers[memberIndex] = updatedMember;
    setMembers(updatedMembers);
    handleAddMemberClose();
  };

  const handleAddMemberClose = () => {
    setAddPaymentOpen(false);
    setSelectedMember(undefined);
    setPaymentAmount('');
    setSplitEqually(true);
  };

  function calculateNetDebts(members) {
    const raw = {};
    for (const payer of members) {
      for (const payment of payer.payments) {
        for (const share of payment.membersSharedPayment) {
          const debtorId = share.id;
          const creditorId = payer.id;
          if (debtorId === creditorId) continue;
          const amount = Number.parseFloat(share.amount || '0');
          if (!Number.isFinite(amount) || amount === 0) continue;

          const key = `${debtorId}-${creditorId}`;
          raw[key] = (raw[key] || 0) + amount;
        }
      }
    }
    const processed = new Set();
    const netDebts = [];
    for (const key of Object.keys(raw)) {
      if (processed.has(key)) continue;
      const [debtorStr, creditorStr] = key.split('-');
      const debtor = Number(debtorStr);
      const creditor = Number(creditorStr);
      const forward = raw[key] || 0;
      const reverseKey = `${creditor}-${debtor}`;
      const reverse = raw[reverseKey] || 0;
      if (forward === reverse) {
        processed.add(key);
        processed.add(reverseKey);
        continue;
      }
      if (forward > reverse) {
        netDebts.push({
          debtorId: debtor,
          creditorId: creditor,
          amount: +(forward - reverse),
        });
      } else {
        netDebts.push({
          debtorId: creditor,
          creditorId: debtor,
          amount: +(reverse - forward),
        });
      }
      processed.add(key);
      processed.add(reverseKey);
    }
    netDebts.sort((a, b) =>
      a.debtorId === b.debtorId
        ? a.creditorId - b.creditorId
        : a.debtorId - b.debtorId,
    );
    return netDebts;
  }

  function humanizeDebts(members, debts) {
    return debts.map((d) => {
      const debtor =
        members.find((m) => m.id === d.debtorId)?.name ?? String(d.debtorId);
      const creditor =
        members.find((m) => m.id === d.creditorId)?.name ??
        String(d.creditorId);
      return `${debtor} should pay ${d.amount} to ${creditor}`;
    });
  }

  return (
    <Container>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        width="100%"
        mt={4}
      >
        <Stack direction="row" alignItems="center" spacing={2}>
          <TextField
            value={memberName}
            onChange={(e) => setMemberName(e.target.value)}
            label="Name"
          />
          <Button onClick={handleAddMember} variant="outlined">
            Add Member
          </Button>
        </Stack>
        <Stack direction="row" spacing={2}>
          <Button
            onClick={() => {
              setMembers([]);
              setSelectedMember(undefined);
              setResults([]);
            }}
          >
            Reset
          </Button>
          <Button
            variant="outlined"
            onClick={() => {
              const net = calculateNetDebts(members);
              setResults(humanizeDebts(members, net));
              setIsCalculateModalOpen(true);
            }}
            disabled={members.length === 0}
          >
            Calculate
          </Button>
        </Stack>
      </Stack>
      <Divider sx={{ my: 3 }} />
      <Stack spacing={2}>
        {members.map((member) => (
          <MemberItem
            key={member.id}
            member={member}
            members={members}
            setAddPaymentOpen={setAddPaymentOpen}
            setSelectedMember={setSelectedMember}
          />
        ))}
      </Stack>
      <Dialog
        fullWidth
        maxWidth="sm"
        open={addPaymentOpen}
        onClose={() => {
          setSelectedMember(undefined);
          setAddPaymentOpen(false);
        }}
      >
        <DialogTitle>Add a new payment for {selectedMember?.name}</DialogTitle>
        <DialogContent>
          <Stack
            direction="row"
            spacing={2}
            sx={{ my: 2 }}
            alignItems="center"
            justifyContent="space-between"
          >
            <TextField
              label="Amount"
              value={paymentAmount}
              onChange={(e) => {
                const value = e.target.value;
                if (/^\d*\.?\d*$/.test(value)) {
                  setPaymentAmount(value);
                }
              }}
              fullWidth
              sx={{
                maxWidth: '80%',
              }}
              disabled={!splitEqually}
            />
            <FormControlLabel
              control={
                <Switch
                  value={splitEqually}
                  onChange={(e) => setSplitEqually(e.target.checked)}
                  defaultChecked
                />
              }
              label={<Typography>Split Equally</Typography>}
              labelPlacement="bottom"
            />
          </Stack>
          <TextField
            value={
              selectedMember?.payments?.[selectedMember.payments.length - 1]
                ?.description || ''
            }
            onChange={(e) => {
              if (!selectedMember) return;
              const updatedPayments = selectedMember.payments.map(
                (payment, index) =>
                  index === selectedMember.payments.length - 1
                    ? { ...payment, description: e.target.value }
                    : payment,
              );
              setSelectedMember({
                ...selectedMember,
                payments: updatedPayments,
              });
            }}
            fullWidth
            multiline
            rows={2}
            label="Description"
          />
          {!splitEqually ? (
            <Stack>
              <Grid container spacing={2} sx={{ mt: 2 }}>
                {members.map((member) => (
                  <Grid
                    component="div"
                    size={{ xs: 6, sm: 6, md: 6, lg: 6, xl: 6 }}
                    key={member.id}
                  >
                    <TextField
                      value={
                        selectedMember?.payments[
                          selectedMember.payments.length - 1
                        ]?.membersSharedPayment?.find((p) => p.id === member.id)
                          ?.amount || ''
                      }
                      onChange={(e) => {
                        const { value } = e.target;
                        setSelectedMember((prev) => {
                          if (!prev) return prev;
                          const payments = [...prev.payments];
                          const lastPaymentIndex = payments.length - 1;
                          const lastPayment = payments[lastPaymentIndex];
                          if (!lastPayment) return prev;
                          const updatedMembersSharedPayment =
                            lastPayment.membersSharedPayment.map((p) =>
                              p.id === member.id ? { ...p, amount: value } : p,
                            );
                          payments[lastPaymentIndex] = {
                            ...lastPayment,
                            membersSharedPayment: updatedMembersSharedPayment,
                          };
                          return { ...prev, payments };
                        });
                      }}
                      fullWidth
                      label={member.name}
                    />
                  </Grid>
                ))}
              </Grid>
            </Stack>
          ) : undefined}
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              handleAddMemberClose();
            }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={() => {
              handleAddPayment();
            }}
          >
            Add Payment
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={isCalculateModalOpen}
        onClose={() => {
          setIsCalculateModalOpen(false);
        }}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle>Calculate Members Shared Payment</DialogTitle>
        <DialogContent>
          {results.map((result, index) => (
            <Typography key={index}>{result}</Typography>
          ))}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsCalculateModalOpen(false)}>Close</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default ShareCalculator;
