import { CssBaseline } from '@mui/material';
import { withErrorHandler } from './common/error_handling';
import AppErrorBoundaryFallback from './common/error_handling/App';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './stores/store';
import { decrement, increment, incrementByAmount } from '@/stores/features/counter';

function App() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <CssBaseline />
      <div>
        <div>
          <button aria-label="Increment value" onClick={() => dispatch(increment())}>
            +
          </button>
          <span>{count}</span>
          <button aria-label="Decrement value" onClick={() => dispatch(decrement())}>
            -
          </button>
        </div>
        <div>
          <button aria-label="Increment by amount" onClick={() => dispatch(incrementByAmount(5))}>
            Increment by 5
          </button>
        </div>
      </div>
    </>
  );
}

export default withErrorHandler(App, AppErrorBoundaryFallback);
