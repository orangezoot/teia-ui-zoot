import { Page } from '@atoms/layout';
import { Tabs } from '@atoms/tab/Tabs';
import { useCopyrightStore } from '@context/copyrightStore';
import { useUserStore } from '@context/userStore';
import { AnimatePresence } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';
import { FormProvider, useForm, useFormState } from 'react-hook-form';
import { Outlet } from 'react-router';
import { HEN_CONTRACT_FA2 } from '@constants';
import Tour, { TourLink } from '@components/tour';

// Form steps are skipped on the Preview and Create tabs.
const COPYRIGHT_TOUR = [
  {
    target: 'copyright-tabs',
    text: 'Registering takes three steps: write your terms in Edit, check them in Preview, then sign them on-chain in Create.',
  },
  {
    target: 'copyright-clauses',
    text: 'Pick what owners of your work are allowed to do with it. Click (?) next to a clause to learn more.',
  },
  {
    target: 'copyright-exclusive',
    text: 'Optionally grant exclusive rights to whoever owns a majority or super-majority of the editions.',
  },
  {
    target: 'copyright-expiration',
    text: 'Set an end date for the clauses, if they should not last forever.',
  },
  {
    target: 'copyright-addendum',
    text: 'Add any extra notes, restrictions or scope to the agreement.',
  },
  {
    target: 'copyright-search',
    text: 'Find the works this agreement covers by token URL, or by contract and token ID. Works you created on Tezos get a verified status.',
  },
  {
    target: 'copyright-works',
    text: 'The works this agreement will apply to.',
  },
  {
    target: 'copyright-agreement',
    text: 'The full license text, written from your choices as you go.',
  },
  {
    target: 'copyright-submit',
    text: 'When you are done, continue to the preview.',
  },
];

export default function CopyrightPage() {
  const methods = useForm({
    defaultValues: useCopyrightStore.getState().customLicenseData || {},
    mode: 'onChange',
    reValidateMode: 'onChange',
  });

  const address = useUserStore((st) => st.address);
  const userInfo = useUserStore((st) => st.userInfo);
  const proxyAddress = useUserStore((st) => st.proxyAddress);
  const proxyName = useUserStore((st) => st.proxyName);
  const { setCustomLicenseData } = useCopyrightStore();
  const [balance, setBalance] = useState<number>();

  const { isValid, errors, isDirty } = useFormState({
    control: methods.control,
  });

  const tabs = useMemo(() => {
    const { customLicenseData } = useCopyrightStore.getState();

    // Preview tab: Enable when we have tokens and at least some clauses selected
    const hasTokens = customLicenseData?.tokens?.length > 0;
    const hasClauses = customLicenseData?.clauses && Object.values(customLicenseData.clauses).some(value =>
      value === true || (typeof value === 'string' && value !== 'none' && value !== '')
    );

    const previewDisabled = !hasTokens || !hasClauses;
    const createDisabled = previewDisabled || !isValid || Object.keys(errors).length > 0;

    return [
      { title: 'Edit', to: '' },
      { title: 'Preview', to: 'preview', disabled: previewDisabled },
      { title: 'Create', to: 'create', disabled: createDisabled },
    ];
  }, [isValid, errors]);

  const minterName = useMemo(() => {
    return proxyName || proxyAddress || userInfo?.name || address;
  }, [address, proxyAddress, proxyName, userInfo?.name]);

  useEffect(() => {
    async function init() {
      if (address) {
        const b = await useUserStore.getState().getBalance(address);
        setBalance(b);
      }
    }
    init();
  }, [address]);

  return (
    <Page title="Copyright">
      <Tour name="copyright" steps={COPYRIGHT_TOUR} />
      <h1>
        Copyright <TourLink name="copyright" title="How copyright registration works" />
      </h1>
      <Tabs tabs={tabs} tourTarget="copyright-tabs" />
      <FormProvider {...methods}>
        <AnimatePresence mode="sync">
          <Outlet
            context={{
              minterName,
              address,
              license: methods.watch('license'),
              setCustomLicenseData,
              HEN_CONTRACT_FA2,
            }}
          />
        </AnimatePresence>
      </FormProvider>
    </Page>
  );
}
