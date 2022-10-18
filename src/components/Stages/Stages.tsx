import './style.css';
import { useTranslation } from 'react-i18next';

function Stages(props: any) {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <div className="main">
        <div className="index">
          <div className="index-container">
            <div className="round stage1">1</div>
            <hr />
          </div>
          <div>{t('constractor')}</div>
        </div>
        <div className="index">
          <div className="index-container">
            <div className="round">2</div>
            <hr />
          </div>
          <div>{t('endUser')}</div>
        </div>
        <div className="index">
          <div className="index-container">
            <div className="round">3</div>
            <hr />
          </div>
          <div>{t('serviceLocation')}</div>
        </div>
        <div>
          <div className="round">4</div>
          <div>{t('billing')}</div>
        </div>
      </div>
    </div>
  );
}

export default Stages;