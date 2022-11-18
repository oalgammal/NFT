import React from 'react';
import { LayoutContext } from '@crystallize/react-layout';
import { useTranslation } from 'next-i18next';

import { useBasket } from 'components/basket';
import IconWallet from 'ui/icons/wallet';

import { Btn, BasketQuantity } from './styles';

const WalletButton = () => {
  const layout = React.useContext(LayoutContext);
  const { t } = useTranslation('basket');

  return (
    <Btn
      onClick={layout?.actions?.showRight}
      type="button"
      aria-label={t('title')}
    >
      <IconWallet />
    </Btn>
  );
};

export default WalletButton;
