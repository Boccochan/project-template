import { useCallback } from 'react'
import { usePageContext } from '@/contexts'

export function useModal() {
  const { state, dispatch } = usePageContext()

  const openModal = useCallback(
    (render: JSX.Element) => dispatch({ type: 'openModal', render }),
    []
  )
  const closeModal = useCallback(() => dispatch({ type: 'closeModal' }), [])

  if (state == null || state.processing == null) {
    return { modal: false, openModal, closeModal }
  }

  return {
    modal: state.modal.openModal,
    modalRender: state.modal.render,
    openModal,
    closeModal,
  }
}
