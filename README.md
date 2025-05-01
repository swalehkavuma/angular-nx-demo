# angular-nx-demo
A sample setup of Angular NX with TailWind CSS

npx create-nx-workspace@latest --workspaceType=integrated --preset=apps --name=angular-nx-demo --style=css --bundler=vite --e2eTestRunner=cypress --unitTestRunner=jest --ssr=false --skipGit --nxCloud=skip
npm install -D @nx/angular instead of (npx nx add @nx/angular) # Install NX plugin for Angular)

npx nx g @nx/angular:app --directory=apps/crm-app --bundler=webpack --name=crm-app --e2eTestRunner=cypress --ssr=false --style=css --unitTestRunner=jest
npx nx serve crm-app
npx nx show project crm-app

npx nx g @nx/angular:lib --directory=libs/design-system-lib --buildable=true --name=design-system-lib --changeDetection=OnPush --style=css --unitTestRunner=jest

npx nx g @nx/angular:app --directory=apps/showcase-app --bundler=webpack --name=showcase-app --e2eTestRunner=cypress --ssr=false --style=css --unitTestRunner=jest
npx nx serve showcase-app
npx nx show project showcase-app


npx nx g @nx/angular:component libs/design-system-lib/src/lib/buttons/button --changeDetection=OnPush


npm install -D tailwindcss @tailwindcss/postcss postcss --force




npx nx add @nx/storybook
npx nx g @nx/angular:storybook-configuration --project=design-system-lib --interactionTests=true --generateStories=true --configureStaticServe=true

npx nx run design-system-lib:storybook

npm install @tailwindcss/postcss postcss

npx storybook@8.6.11 add @storybook/addon-styling-webpack --config-dir=libs/design-system-lib/.storybook/