(ns snetwork.core
  (:require [cljsjs.material-ui]
            [cljs-react-material-ui.core :as ui]
            ;[cljs-react-material-ui.icons :as ic]
            [goog.dom :as gdom]
            [om.dom :as dom]
            [om.next :as om :refer-macros [defui]]
            [snetwork.parser :as p]
            [snetwork.util :as u]
            [snetwork.example-grid :as grid]
            [snetwork.state :as s]
            [snetwork.space-view :as space]
            ))

(enable-console-print!)


(defui AppRoot
  ;; static om/IQuery
  ;; (query [this]
  ;;   [])
  Object
  (render [this]
          ;; (ui/mui-theme-provider
          ;;  {:mui-theme (ui/get-mui-theme 
          ;;               {:palette                   ; You can use either camelCase or kebab-case
          ;;                {:primary1-color (ui/color :deep-orange-a100)} 
          ;;                :raised-button 
          ;;                {:primary-text-color (ui/color :light-black) 
          ;;                 :font-weight 200}}
          ;;               )}
           
           (grid/example-grid)
           (space/space-view)
          ;; )
          ))


(def reconciler
  (om/reconciler
   {:state     (atom s/init-state)
    :parser    (om/parser {:read p/read :mutate p/mutate})}))

(om/add-root! reconciler AppRoot (gdom/getElement "app"))
