import React, { useRef } from "react";

function ToolTip({ children, tooltipText, orientation }) {
	const tipRef = useRef(null)
	const orientations = {
		right: 'right',
		top: 'top',
		left: 'left',
		bottom: 'bottom',
	}

	function handleMouseEnter() {
		tipRef.current.style.opacity = 1
	}

	function handleMouseLeave() {
		tipRef.current.style.opacity = 0
	}

	const setContainerPosition = (orien) => {
		let classnames

		switch (orien) {
			case orientations.right:
				classnames = 'top-0 left-full ml-4'
				break
			case orientations.left:
				classnames = 'top-0 right-full mr-4'
				break
			case orientations.top:
				classnames = 'bottom-full left-[50%] translate-x-[-50%] -translate-y-2'
				break
			case orientations.bottom:
				classnames = 'top-full left-[50%] translate-x-[-50%] translate-y-2'
				break
			default:
				break
		}

		return classnames
	}

	const setPointerPosition = (orien) => {
		let classnames

		switch (orien) {
			case orientations.right:
				classnames = 'left-[-6px]'
				break
			case orientations.left:
				classnames = 'right-[-6px]'
				break
			case orientations.top:
				classnames = 'top-full left-[50%] translate-x-[-50%] -translate-y-2'
				break
			case orientations.bottom:
				classnames = 'bottom-full left-[50%] translate-x-[-50%] translate-y-2'
				break

			default:
				break
		}

		return classnames
	}

	const classContainer = `w-max absolute z-10 ${setContainerPosition(
		orientation
	)} bg-primary-500 text-white text-sm px-2 py-1 rounded flex items-center transition-all duration-150 pointer-events-none`

	const pointerClasses = `bg-primary-500 h-3 w-3 absolute z-10 ${setPointerPosition(
		orientation
	)} rotate-45 pointer-events-none`

	return (
		<div className="relative flex items-center" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
			<div className={classContainer} style={{ opacity: 0 }} ref={tipRef}>
				<div className={pointerClasses} />
				<p
					className="mb-0 text-sm text-center"
					dangerouslySetInnerHTML={{ __html: tooltipText }}
				/>
			</div>
			{children}
		</div>
	)
}
export default ToolTip