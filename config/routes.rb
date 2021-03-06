Myportfolio::Application.routes.draw do
  
  # match "http://www.helenamoreno.es/", :to => redirect("http://www.helenamoreno.com/home/hello?locale=es")
  # match "http://helenamoreno.es/", :to => redirect("http://helenamoreno.com/home/hello?locale=es")

  constraints(:host => /helenamoreno.es/) do
    root :to => redirect("http://helenamoreno.com")
    match '/*path', :to => redirect {|params| "http://helenamoreno.com/?locale=es"}
    # match '/*path', :to => redirect {|params| "http://helenamoreno.com/#{params[:path]}"}
  end
  
  constraints(:host => /www.helenamoreno.es/) do
    root :to => redirect("http://www.helenamoreno.com")
    match '/*path', :to => redirect {|params| "http://www.helenamoreno.com/?locale=es"}
  end
  
  
  scope "(:locale)", :locale => /en|es/ do
    resources :projects
  end

  resources :supports

  get "home/hello"  

#  scope "/:locale" do
#    resources :projects
#  end



  resources :projects

  resources :supports, :only => [:new, :create]

  # config/routes.rb

  # The priority is based upon order of creation:
  # first created -> highest priority.

  # Sample of regular route:
  #   match 'products/:id' => 'catalog#view'
  # Keep in mind you can assign values other than :controller and :action

  # Sample of named route:
  #   match 'products/:id/purchase' => 'catalog#purchase', :as => :purchase
  # This route can be invoked with purchase_url(:id => product.id)

  # Sample resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Sample resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Sample resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Sample resource route with more complex sub-resources
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', :on => :collection
  #     end
  #   end

  # Sample resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end

   match '/:locale' => 'home#hello'



  # You can have the root of your site routed with "root"
  # just remember to delete public/index.html.
  # root :to => 'welcome#index'
  root :to => "home#hello"


  # See how all your routes lay out with "rake routes"

  # This is a legacy wild controller route that's not recommended for RESTful applications.
  # Note: This route will make all actions in every controller accessible via GET requests.
  # match ':controller(/:action(/:id(.:format)))'
end