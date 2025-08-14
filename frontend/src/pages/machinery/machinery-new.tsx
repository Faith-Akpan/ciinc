import { mdiChartTimelineVariant } from '@mdi/js'
import Head from 'next/head'
import React, { ReactElement } from 'react'
import CardBox from '../../components/CardBox'
import LayoutAuthenticated from '../../layouts/Authenticated'
import SectionMain from '../../components/SectionMain'
import SectionTitleLineWithButton from '../../components/SectionTitleLineWithButton'
import { getPageTitle } from '../../config'

import { Field, Form, Formik } from 'formik'
import FormField from '../../components/FormField'
import BaseDivider from '../../components/BaseDivider'
import BaseButtons from '../../components/BaseButtons'
import BaseButton from '../../components/BaseButton'
import FormCheckRadio from '../../components/FormCheckRadio'
import FormCheckRadioGroup from '../../components/FormCheckRadioGroup'
import { SwitchField } from '../../components/SwitchField'

import { SelectField } from '../../components/SelectField'
import {RichTextField} from "../../components/RichTextField";

import { create } from '../../stores/machinery/machinerySlice'
import { useAppDispatch } from '../../stores/hooks'
import { useRouter } from 'next/router'

const initialValues = {

    machine_name: '',

    model: '',

    maintenance_schedule: '',

    is_operational: false,

}

const MachineryNew = () => {
  const router = useRouter()
  const dispatch = useAppDispatch()

  const handleSubmit = async (data) => {
    await dispatch(create(data))
    await router.push('/machinery/machinery-list')
  }
  return (
    <>
      <Head>
        <title>{getPageTitle('New Item')}</title>
      </Head>
      <SectionMain>
        <SectionTitleLineWithButton icon={mdiChartTimelineVariant} title="New Item" main>
        {''}
        </SectionTitleLineWithButton>
        <CardBox>
          <Formik
            initialValues={
                initialValues
            }
            onSubmit={(values) => handleSubmit(values)}
          >
            <Form>

  <FormField
      label="MachineName"
  >
      <Field
          name="machine_name"
          placeholder="MachineName"
      />
  </FormField>

  <FormField
      label="Model"
  >
      <Field
          name="model"
          placeholder="Model"
      />
  </FormField>

  <FormField
      label="MaintenanceSchedule"
  >
      <Field
          type="datetime-local"
          name="maintenance_schedule"
          placeholder="MaintenanceSchedule"
      />
  </FormField>

  <FormField label='IsOperational' labelFor='is_operational'>
      <Field
          name='is_operational'
          id='is_operational'
          component={SwitchField}
      ></Field>
  </FormField>

              <BaseDivider />
              <BaseButtons>
                <BaseButton type="submit" color="info" label="Submit" />
                <BaseButton type="reset" color="info" outline label="Reset" />
                <BaseButton type='reset' color='danger' outline label='Cancel' onClick={() => router.push('/machinery/machinery-list')}/>
              </BaseButtons>
            </Form>
          </Formik>
        </CardBox>
      </SectionMain>
    </>
  )
}

MachineryNew.getLayout = function getLayout(page: ReactElement) {
  return (
      <LayoutAuthenticated>
          {page}
      </LayoutAuthenticated>
  )
}

export default MachineryNew
