(ns snetwork.core
  (:require [cljsjs.material-ui]
            [cljs-react-material-ui.core :as ui]
            ;[cljs-react-material-ui.icons :as ic]
            [goog.dom :as gdom]
            [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]
            [snetwork.util :as u]
            [snetwork.parser :as p]
            ;; [snetwork.util :as u]
            [snetwork.example-grid :as grid]
            ;[snetwork.state :as s]
            [snetwork.space-view :as space]
            [snetwork.example-tile :as tile]
            [snetwork.link-detail :as link]
            ))

(enable-console-print!)


(defui AppRoot 

  static om/IQuery
  (query [this]
         `[{:examples ~(om/get-query grid/ExampleGrid)}
           {:links [{:links/list ~(om/get-query link/LinkDetail)}]}
           {:space ~(om/get-query space/SpaceView)}
           ])
  
  Object
  (render [this]
          (let [props (om/props this)
                state (om/get-state this)
                examples (:examples props)
                ;labels (:label/list props)
                links (:links props)
                space (:space props)
                ]
           
            (ui/mui-theme-provider
             {:mui-theme (ui/get-mui-theme 
                          {:palette    ; You can use either camelCase or kebab-case
                           {:primary1-color (ui/color :deep-orange-a100)} 
                           :raised-button 
                           {:primary-text-color (ui/color :light-black) 
                            :font-weight 200}}
                          )}
             (dom/div #js {:className "container"}
                      (grid/example-grid examples)
                      (space/space-view space)
                      )))))

(.log js/console js/simSpaceJson)

(defonce init-state (js->clj js/simSpaceJson :keywordize-keys true))

(def reconciler
  (om/reconciler
   {:state     init-state
    :normalize true
    :parser    (om/parser {:read p/read :mutate p/mutate})}))

(om/add-root! reconciler AppRoot (gdom/getElement "app"))
